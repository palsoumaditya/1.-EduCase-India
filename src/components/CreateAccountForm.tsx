import { useState } from 'react';
import Button from './Button';

interface CreateAccountFormProps {
  onSubmit: (formData: FormData) => void;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  password: string;
  companyName: string;
  isAgency: boolean;
}

const CreateAccountForm: React.FC<CreateAccountFormProps> = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAgencyChange = (value: boolean) => {
    setFormData(prev => ({
      ...prev,
      isAgency: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md border border-gray-200 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Create your PopX account</h2>
        
        {/* Add autoComplete="off" to the form tag */}
        <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email address"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              // Add autoComplete="off" to prevent email autofill
              autoComplete="off"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              // Use "new-password" for registration forms to prevent autofill
              autoComplete="new-password"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company name
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Enter company name (optional)"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Are you an Agency?<span className="text-red-500">*</span>
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="isAgency"
                  checked={formData.isAgency === true}
                  onChange={() => handleAgencyChange(true)}
                  required
                  className="mr-2 text-purple-600 focus:ring-purple-500"
                />
                <span className="text-sm text-gray-700">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="isAgency"
                  checked={formData.isAgency === false}
                  onChange={() => handleAgencyChange(false)}
                  required
                  className="mr-2 text-purple-600 focus:ring-purple-500"
                />
                <span className="text-sm text-gray-700">No</span>
              </label>
            </div>
          </div>

          <div className="flex space-x-3 pt-4">
            <Button
              variant="secondary"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              type="submit"
              className="flex-1"
            >
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccountForm;