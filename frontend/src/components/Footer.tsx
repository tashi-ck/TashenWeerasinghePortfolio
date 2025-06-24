import React from 'react';
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="py-8 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          &copy; {currentYear} Tashen Weerasinghe. All rights reserved.
        </p>
      </div>
    </footer>;
};
export default Footer;