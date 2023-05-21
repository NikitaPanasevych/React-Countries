import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import { CountryPageCard } from '../components/countryPage';
import { Country } from '../interfaces/data.interface';
import { withCPageLayout } from '../layout/countryPageLayout';

export const getStaticPaths: GetStaticPaths = async () => {
   const { data: data } = await axios.get('https://restcountries.com/v2/all');
   const paths = data.map((country: Country) => {
      return {
         params: { name: country.name },
      };
   });
   return {
      paths,
      fallback: false,
   };
};

export const getStaticProps: GetStaticProps = async (context) => {
   const name = context.params?.name;
   const { data: data } = await axios.get<Country>('https://restcountries.com/v2/name/' + name);
   return {
      props: { data: data },
   };
};

interface PageProps extends Record<string, unknown> {
   data: Country[];
}

const CountryPage = ({ data }: PageProps) => {
   return (
      <>
         <CountryPageCard
            name={data[0].name}
            population={data[0].population}
            region={data[0].region}
            capital={data[0].capital}
            image={data[0].flag}
            subRegion={data[0].subregion}
            currencies={data[0].currencies}
            languages={data[0].languages}
            borders={data[0].borders}
            nativeName={data[0].nativeName}
            topLevelDomain={data[0].topLevelDomain}
         />
      </>
   );
};

export default withCPageLayout(CountryPage);
