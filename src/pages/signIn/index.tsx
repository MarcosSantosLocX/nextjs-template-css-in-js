import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';

import { useTranslation } from '@/common/hooks/i18n/useTranslation';
import { ModuleSignIn } from '@/common/modules';
import { getI18nProps } from '@/common/utils/i18n/getSSR';

export default function SignInPage() {
  const { translateNS } = useTranslation('signIn');

  return (
    <>
      <Head>
        <title>{translateNS('signIn.title')}</title>
      </Head>

      <ModuleSignIn />
    </>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  return {
    props: {
      ...(await getI18nProps(context, ['common', 'signIn'])),
    },
  };
};
