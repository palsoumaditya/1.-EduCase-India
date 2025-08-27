import Button from './Button';

interface AccountSettingsProps {
  userData: {
    fullName: string;
    email: string;
    phoneNumber: string;
    companyName: string;
    isAgency: boolean;
  };
  onBack: () => void;
}

const AccountSettings: React.FC<AccountSettingsProps> = ({ userData, onBack }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-2">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-xs md:max-w-sm lg:max-w-md h-screen md:h-auto md:min-h-[500px] lg:min-h-[550px] xl:min-h-[600px] flex flex-col">
        {/* Header */}
        <div className="px-4 md:px-6 py-3 md:py-4 border-b border-gray-200">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 text-center">Account Settings</h1>
        </div>

        {/* Profile Section */}
        <div className="px-4 md:px-6 py-6 md:py-8 border-b border-gray-200 flex-1 flex flex-col justify-center">
          <div className="flex items-start space-x-4 md:space-x-6">
            {/* Profile Picture */}
            <div className="relative">
              <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-gray-300 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              {/* Camera Icon */}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer">
                <svg className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* User Details */}
            <div className="flex-1">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 md:mb-3">{userData.fullName}</h2>
              <p className="text-gray-700 text-sm md:text-base lg:text-lg">{userData.email}</p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-4 md:px-6 py-6 md:py-8 flex-1 flex items-center justify-center">
          <p className="text-gray-700 leading-relaxed text-center text-sm md:text-base lg:text-lg max-w-xs md:max-w-sm">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>

        {/* Back Button */}
        <div className="px-4 md:px-6 py-3 md:py-4 border-t border-gray-200">
          <Button
            variant="secondary"
            onClick={onBack}
            className="w-full"
          >
            Back to Landing Page
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
