jest.mock("recharts", () => ({
  YAxis: (props: unknown) => <div {...props}>YAxis</div>,
  Line: (props: unknown) => <div {...props}>Line</div>,
  LineChart: (props: unknown) => <div {...props}>LineChart</div>,
  ResponsiveContainer: (props: unknown) => (
    <div {...props}>ResponsiveContainer</div>
  ),
}));
import React from "react";
import renderer from "react-test-renderer";

import { FAKE_REVIEW } from "^/__tests__/__helpers__/fake-review";
import { RatingGraph } from "^/app/rating-graph";

describe("RatingGraph", () => {
  it("should render a graph displaying data about the provided reviews", () => {
    const ratingGraph = renderer.create(
      <RatingGraph reviews={[FAKE_REVIEW]} />
    );

    expect(ratingGraph).toMatchSnapshot();
  });
});
