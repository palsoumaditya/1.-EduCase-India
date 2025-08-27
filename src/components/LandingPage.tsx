import Button from './Button';
import { Heading, Description } from './Typography';
import { LANDING_PAGE_STRINGS } from '../constants/strings';

interface LandingPageProps {
  onCreateAccount: () => void;
  onLogin: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onCreateAccount, onLogin }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Upper half - Empty space as shown in the image */}
      <div className="flex-1 flex items-center justify-center">
        {/* This area is intentionally left empty as per the design */}
      </div>
      
      {/* Lower half - Content area */}
      <div className="px-6 pb-8">
        <div className="max-w-sm mx-auto border-2 border-black rounded-lg p-6">
          <Heading>{LANDING_PAGE_STRINGS.TITLE}</Heading>
          <Description>
            {LANDING_PAGE_STRINGS.DESCRIPTION}
          </Description>
          
          <div className="space-y-4">
            <Button 
              variant="primary" 
              onClick={onCreateAccount}
            >
              {LANDING_PAGE_STRINGS.CREATE_ACCOUNT}
            </Button>
            
            <Button 
              variant="secondary" 
              onClick={onLogin}
            >
              {LANDING_PAGE_STRINGS.LOGIN}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
