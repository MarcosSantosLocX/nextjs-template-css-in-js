import { GetStaticPropsContext } from 'next';
import Head from 'next/head';

import { useTranslation } from '@/common/hooks/i18n/useTranslation';
import { ModuleDashboard } from '@/common/modules';
import { getI18nProps } from '@/common/utils/i18n/getSSR';

function Dashboard() {
  const { translateNS } = useTranslation('dashboard');

  return (
    <>
      <Head>
        <title>{translateNS('dashboard.title')}</title>
      </Head>

      <ModuleDashboard />
    </>
  );
}

export default Dashboard;

export const getStaticProps = async (context: GetStaticPropsContext) => {
  return {
    props: {
      ...(await getI18nProps(context, ['common', 'dashboard'])),
    },
  };
};
