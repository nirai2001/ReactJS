
import { useEffect } from 'react';
import NewsletterSignup from '../components/NewsletterSignup';
import PageContent from '../components/PageContent';
import { useFetcher } from 'react-router-dom';

function NewsletterPage() {
  const fetcher = useFetcher();
  const {data, state} = fetcher; 
  useEffect(() => {
      if(state === 'idle' && data && data.message){
        window.alert(data.message);
      }
  }, [data,state])
  return (
    <PageContent title="Join our awesome newsletter!">
      <NewsletterSignup  />
    </PageContent>
  );
}

export default NewsletterPage;

export async function action({ request }) {
  // const data = await request.formData();
  // const email = data.get('email');

  // send to backend newsletter server ...
  return { message: 'Signup successful!' };
}