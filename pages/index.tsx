import axios from 'axios';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useContext } from 'react';
import { Card } from '../components/countryCard';
import { AppContext } from '../context/app.context';
import { Country } from '../interfaces/data.interface';
import { withLayout } from '../layout';

function Home({ data }: DataProps) {
   const { region, search } = useContext(AppContext);

   return (
      <>
         {data.map((country) => {
            if (country.region === region || region === 'Filter by region' || region === 'World')
               if (search === '' || country.name.toLowerCase().startsWith(search.toLowerCase())) {
                  return (
                     <>
                        <Link href={'/' + country.name} key={country.name}>
                           <Card
                              key={country.name}
                              name={country.name}
                              population={country.population}
                              image={country.flag}
                              region={country.region}
                              capital={country.capital}
                           />
                        </Link>
                     </>
                  );
               }
         })}
      </>
   );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
   const { data: data } = await axios.get<Country[]>('https://restcountries.com/v2/all');
   return {
      props: {
         data,
      },
   };
};

export interface DataProps extends Record<string, unknown> {
   data: Country[];
}
