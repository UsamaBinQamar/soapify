-- Step 1: Enable RLS on the tenants table
ALTER TABLE public.tenants ENABLE ROW LEVEL SECURITY;

-- Step 2: Create policies for tenants table

-- Policy 1: Allow users to read their own tenant record
-- (when they're logged in and the tenant record was created for them)
CREATE POLICY "Users can view own tenant record" ON public.tenants
  FOR SELECT 
  USING (auth.uid() = created_by);

-- Policy 2: Allow admins to view all tenant records
CREATE POLICY "Admins can view all tenants" ON public.tenants
  FOR SELECT 
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'admin'
    )
  );

-- Policy 3: Allow admins to insert new tenant records
CREATE POLICY "Admins can create tenants" ON public.tenants
  FOR INSERT 
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'admin'
    )
  );

-- Policy 4: Allow admins to update tenant records
CREATE POLICY "Admins can update tenants" ON public.tenants
  FOR UPDATE 
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'admin'
    )
  );

-- Policy 5: Allow admins to delete tenant records
CREATE POLICY "Admins can delete tenants" ON public.tenants
  FOR DELETE 
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'admin'
    )
  );

-- Step 3: If you also want tenants to update their own records
CREATE POLICY "Users can update own tenant record" ON public.tenants
  FOR UPDATE 
  USING (auth.uid() = created_by);

-- Step 4: Create a helper function to check admin status (optional)
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() 
    AND profiles.role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Step 5: Alternative simpler policies using the helper function
-- (You can replace the above policies with these simpler ones)

-- Drop existing policies first if you want to use the simpler versions
-- DROP POLICY "Admins can view all tenants" ON public.tenants;
-- DROP POLICY "Admins can create tenants" ON public.tenants;
-- DROP POLICY "Admins can update tenants" ON public.tenants;
-- DROP POLICY "Admins can delete tenants" ON public.tenants;

-- Create simpler admin policies
-- CREATE POLICY "Admin full access" ON public.tenants
--   FOR ALL USING (public.is_admin());

-- Step 6: Grant necessary permissions
-- Grant usage on the table to authenticated users
GRANT ALL ON public.tenants TO authenticated;
GRANT ALL ON public.tenants TO service_role;