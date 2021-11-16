import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import Link from 'next/link';

interface RegisterFormProps {
  onSubmit: (values: any) => void;
}

export default function RegisterForm({ onSubmit }: RegisterFormProps) {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      password: "",
      email: "",
      photo: "",
    },
    onSubmit: (values) => {
      onSubmit(values);
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <Typography align="center" variant="h3">Register</Typography>
        <Box my={4}>
          <TextField
            size="small"
            label="Name"
            name="name"
            type="text"
            variant="standard"
            fullWidth
            onChange={handleChange}
            value={values.name}
          />
          <Box mt={2} />
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
        <Button type="submit" fullWidth variant="contained" color="primary">Register</Button>
        <Box mt={2} />
        <Link passHref href="/">
          <Button fullWidth variant="outlined" color="primary">Login</Button>
        </Link>
      </Box>
    </form>
  )
}