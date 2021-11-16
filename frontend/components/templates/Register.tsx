import { Container } from '@mui/material';
import { Box } from '@mui/system';
import RegisterForm from '../organisms/RegisterForm';

interface RegisterTemplateProps {
  onSubmit: (values: any) => void;
}

export default function RegisterTemplate({ onSubmit }: RegisterTemplateProps) {

  return (
    <>
      <Container maxWidth="sm">
        <Box mt={4}>
          <RegisterForm onSubmit={onSubmit} />
        </Box>
      </Container>
    </>
  )
}