import {
  Content,
  fetchOneEntry,
  getBuilderSearchParams,
  RegisteredComponent,
} from '@builder.io/sdk-react-nextjs';
import CatFacts from './cat-facts';

interface MyPageProps {
  params: {
    slug: string[];
  };
  searchParams: Record<string, string>;
}

const apiKey = 'f1a790f8c3204b3b8c5c1795aeac4660';

export default async function Page(props: MyPageProps) {
  const urlPath = '/' + (props.params?.slug?.join('/') || '');

  const content = await fetchOneEntry({
    model: 'page',
    apiKey,
    options: getBuilderSearchParams(props.searchParams),
    userAttributes: { urlPath },
  });

  return <Content content={content} model="page" apiKey={apiKey} customComponents={components} />;
}
export const revalidate = 1;

const components = [
  {
    name: 'CatFacts',
    component: CatFacts,
    // You must add the below option or the SDK will fail to render.
    isRSC: true,
  },
] satisfies RegisteredComponent[];
