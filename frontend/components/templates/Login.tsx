import { Container } from '@mui/material';
import { Box } from '@mui/system';
import LoginForm from '../organisms/LoginForm';

interface LoginTemplateProps {
  onSubmit: (values: any) => void;
}

export default function LoginTemplate({ onSubmit }: LoginTemplateProps) {

  return (
    <>
      <Container maxWidth="sm">
        <Box mt={4}>
          <LoginForm onSubmit={onSubmit} />
        </Box>
      </Container>
    </>
  )
}