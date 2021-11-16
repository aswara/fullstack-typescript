import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import Link from 'next/link'

interface LoginFormProps {
  onSubmit: (values: any) => void;
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    onSubmit: (values) => {
      onSubmit(values);
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <Typography align="center" variant="h3">Login</Typography>
        <Box my={4}>
          <TextField
            size="small"
            label="Email"
            name="email"
            type="email"
            variant="standard"
            fullWidth
            onChange={handleChange}
            value={values.email}
          />
          <Box mt={2} />
          <TextField
            size="small"
            label="Password"
            name="password"
            type="password"
            variant="standard"
            fullWidth
            onChange={handleChange}
            value={values.password}
          />
        </Box>
        <Button type="submit" fullWidth variant="contained" color="primary">Login</Button>
        <Box mt={2} />
        <Link passHref href="/register">
          <Button fullWidth variant="outlined" color="primary">Register</Button>
        </Link>
      </Box>
    </form>
  )
}