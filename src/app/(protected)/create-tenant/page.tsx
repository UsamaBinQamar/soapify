"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
const FACILITY_TYPES = ["Hospital", "Clinic", "Individual"];
const ROLES = ["Doctor", "Admin"];

export default function CreateTenantPage() {
  const supabase = createClient();
  const [form, setForm] = useState({
    name: "",
    type: "",
    email: "",
    contact: "",
    address: "",
    role: "",
    assigned_facility: "",
    credentials: "",
    specialty: "",
    license_number: "",
    license_state: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    // Get current user for created_by
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    console.log(user);
    if (userError || !user) {
      console.log(userError);
      console.log(user);
      setMessage("You must be logged in as admin.");
      setLoading(false);
      return;
    }

    // Prepare data
    const tenantData = {
      ...form,
      credentials: form.credentials
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      specialty: form.specialty
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      created_by: user.id,
      created_at: new Date().toISOString(),
    };

    // Insert into tenants
    const { error } = await supabase.from("tenants").insert([tenantData]);
    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Tenant created successfully!");
      setForm({
        name: "",
        type: "",
        email: "",
        contact: "",
        address: "",
        role: "",
        assigned_facility: "",
        credentials: "",
        specialty: "",
        license_number: "",
        license_state: "",
      });
    }
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Create Tenant</h2>
      {message && (
        <div
          className="mb-4 text-center text-sm font-medium p-2 rounded border"
          style={{ color: message.includes("success") ? "green" : "red" }}
        >
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Name</label>
          <Input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-1">Type</label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            required
            className="w-full rounded border px-3 py-2"
          >
            <option value="">Select type</option>
            {FACILITY_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <Input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-1">Contact</label>
          <Input name="contact" value={form.contact} onChange={handleChange} />
        </div>
        <div>
          <label className="block mb-1">Address</label>
          <Input name="address" value={form.address} onChange={handleChange} />
        </div>
        <div>
          <label className="block mb-1">Role</label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            required
            className="w-full rounded border px-3 py-2"
          >
            <option value="">Select role</option>
            {ROLES.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1">Assigned Facility</label>
          <Input
            name="assigned_facility"
            value={form.assigned_facility}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block mb-1">Credentials (comma separated)</label>
          <Input
            name="credentials"
            value={form.credentials}
            onChange={handleChange}
            placeholder="MD, PhD"
          />
        </div>
        <div>
          <label className="block mb-1">Specialty (comma separated)</label>
          <Input
            name="specialty"
            value={form.specialty}
            onChange={handleChange}
            placeholder="Cardiology, Neurology"
          />
        </div>
        <div>
          <label className="block mb-1">License Number</label>
          <Input
            name="license_number"
            value={form.license_number}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block mb-1">License State</label>
          <Input
            name="license_state"
            value={form.license_state}
            onChange={handleChange}
          />
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Creating..." : "Create Tenant"}
        </Button>
      </form>
    </div>
  );
}
