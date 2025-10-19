import React from 'react'
import SingleRow from '../SingleRow/SingleRow'
import requests from '../../../utils/request'

const RowList = () => {
  return (
    <div>
      <SingleRow
        title={"NETFLIX ORGINALS"}
        fetchurl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <SingleRow
        title={"Trending Now"}
        fetchurl={requests.fetchTrending}
        isLargeRow={true}
      />
      <SingleRow
        title={"Top Rated"}
        isLargeRow={true}
        fetchurl={requests.fetchTopRated}
      />
      <SingleRow
        title={"Action Movies"}
        isLargeRow={true}
        fetchurl={requests.fetchActionMovies}
      />
      <SingleRow
        title={"Comedy Movies"}
        isLargeRow={true}
        fetchurl={requests.fetchComedyMovies}
      />
      <SingleRow
        title={"Horror Movies"}
        isLargeRow={true}
        fetchurl={requests.fetchHorrorMovies}
      />
      <SingleRow
        title={"Romance Movies"}
        isLargeRow={true}
        fetchurl={requests.fetchRomanceMovies}
      />
      <SingleRow
        title={"Documentaries"}
        isLargeRow={true}
        fetchurl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default RowList
