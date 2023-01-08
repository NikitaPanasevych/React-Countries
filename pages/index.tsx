import axios from "axios";
import { GetStaticProps } from "next";
import { useContext } from "react";
import { Card } from "../components/countryCard/countryCard";
import { AppContext } from "../context/app.context";
import { Country } from "../interfaces/data.interface";
import { withLayout } from "../layout/layout";


function Home({data}: DataProps) {

  const { region, search } = useContext(AppContext);

  return (
    <>
      {
        data.map(
          (country, index:number) => {
            if(country.region === region || region === "Filter by region" || region === "World")  
              if(search === "" ||  country.name.toLowerCase().startsWith(search.toLowerCase())){
                return(
                  <Card
                    key={index} 
                    name={country.name}
                    population={country.population}
                    image={country.flag}
                    region={country.region}
                    capital={country.capital}
                  />
                )
              }       
          }
        )
      }
    </>
  );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const { data: data } = await axios.get<Country[]>("https://restcountries.com/v2/all");
  return{
    props: {
      data
    }
  };
};

interface DataProps extends Record<string, unknown> {
  data: Country[];
};