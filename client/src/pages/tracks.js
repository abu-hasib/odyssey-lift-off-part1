import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import TrackCard from "../containers/track-card";
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const TRACKS = gql`
  query Query {
    tracksForHome {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
    }
  }
`;

const Tracks = () => {
  const { loading, data, error } = useQuery(TRACKS);

  return (
    <Layout grid>
      <QueryResult {...{ loading, error, data }}>
        {" "}
        {data?.tracksForHome?.map((track) => (
          <TrackCard track={track} />
        ))}{" "}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
