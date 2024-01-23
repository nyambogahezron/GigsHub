import { useEffect } from 'react';

const PageTitle = ({ title }) => {
  useEffect(() => {
    const PageTitle = (document.title = { title });
    return () => {
      document.title = PageTitle || 'GIGHUB - Find | Post Jobs';
    };
  }, []);
};
export default PageTitle;
