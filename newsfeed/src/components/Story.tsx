import * as React from "react";
import Card from "./Card";
import Heading from "./Heading";
import PosterByline, { type Props as PosterBylineProps } from "./PosterByline";
import StorySummary from "./StorySummary";
import Image from "./Image";
import Timestamp from "./Timestamp";

type Props = {
  story: {
    title: string;
    summary: string;
    createdAt: string;
    thumbnail: {
      url: string;
    };
    poster: PosterBylineProps["poster"];
  };
};

export default function Story({ story }: Props): React.ReactElement {
  return (
    <Card>
      <PosterByline poster={story.poster} />
      <Heading>{story.title}</Heading>
      <Timestamp time={story.createdAt}/>
      <Image image={story.thumbnail} width={400} height={400} />
      <StorySummary summary={story.summary} />
    </Card>
  );
}
