import { useState } from 'react';
import Button from './Button';

interface LoginFormProps {
  onSubmit: (formData: LoginData) => void;
}

interface LoginData {
  email: string;
  password: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<LoginData>({
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Signin to your PopX account</h2>
        <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        
        <form onSubmit={handleSubmit} className="space-y-8" autoComplete="off">
          <div>
            <label className="block text-sm font-medium text-purple-600 mb-3">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter email address"
              required
              autoComplete="off"
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-600 mb-3">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter password"
              required
              autoComplete="new-password"
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="pt-6">
            <Button
              variant="secondary"
              type="submit"
              className="w-full"
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
