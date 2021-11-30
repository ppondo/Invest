import React from "react";

export const Result = (props) => {
  const [result, setResult] = React.useState(0);

  return (
    <div>
      <h1>You've got {result}%</h1>
      <p>Result: Average, You did pretty well.</p>
      <br />
      <a href="https://forms.gle/RwrKiBnofKtrAnfR7">
        Click here to take a servey with us
      </a>
      <h2>Generation wise investment</h2>
      <img
        src="/investment_by_gen.png"
        alt="Investment interest by generation"
      />
      <p>
        HAVING BEEN born into the most prosperous period in human history,
        today’s youngsters have much to hope for. But they have much to fear as
        well. On top of an inherited climate crisis, the young will have to
        suffer the economic consequences of a pandemic. For “Generation Z”,
        those born after 1997, this could mean higher rates of unemployment,
        lower earnings and higher taxes to pay off pandemic-era debts. Add to
        this unhappy list a less-noticed but no less serious problem: Generation
        Z’s dismal financial prospects. According to Credit Suisse’s latest
        global investment returns yearbook, Generation Z’s earnings from stocks
        and bonds will be significantly lower than those of previous
        generations.
      </p>
      <p>
        The report’s authors, Elroy Dimson of Cambridge University and Paul
        Marsh and Mike Staunton of London Business School, begin by looking at
        average investment returns since 1900. They estimate that baby-boomers
        (defined here as those born 1946–64), Generation X (born 1965–80) and
        Millennials (born 1981–96) have all earned average real returns of at
        least 5% on equities and at least 3.6% on bonds. The authors then
        forecast what Generation Z might expect to earn in the coming decades.
        To do this, they assume that the real return on equities will be equal
        to the inflation-adjusted return on a risk-free asset (represented by
        Treasury bills), which they estimate at -0.5%, plus a “risk premium” for
        buying equities of about 3.5%, for a real return of just 3%. For bonds,
        the authors assume the current, negative real yields on the index-linked
        variety. All of this adds up to annualised returns for Gen Z of a mere
        2% on a 70:30 portfolio of stocks and bonds—not even a third of the
        historical return of the baby boomers (see chart). These guesses could
        prove too pessimistic, but perhaps not dramatically so. The authors
        concede that a serious bout of deflation could drive up bond returns.
        But currently inflation, not deflation, is the worry.
      </p>
    </div>
  );
};
