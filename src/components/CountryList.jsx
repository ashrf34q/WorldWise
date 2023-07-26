import styles from "./CountryList.module.css";
import PropTypes from "prop-types";
import Message from "./Message";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";

CountryList.propTypes = {
  cities: PropTypes.array,
  isLoading: PropTypes.bool,
};

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city in the map" />
    );

  const countries = cities.filter((city) => city.country);

  return (
    <div className={styles.countryList}>
      {countries.map((country, i) => (
        <CountryItem country={country} key={i} />
      ))}
    </div>
  );
}

export default CountryList;
