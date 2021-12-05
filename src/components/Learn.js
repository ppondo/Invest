import React from "react";
import {
  Grid,
  Box,
  Card,
  Button,
  CardContent,
  Typography,
} from "@mui/material";
import image from "../images/Presentation_1.jpg";
import image2 from "../images/robo.jpg";
import image3 from "../images/Finance.png";
import image4 from "../images/retire.jpg";
import image5 from "../images/diverse.jpg";
import styled from "styled-components";

export default function Learn() {
  return (
    <Wrapper>
      <div id="Learn">
        <Box
          display="inline-block"
          sx={{ mt: 5, ml: 7, mr: 7 }}
          alignItems="center"
          justifyContent="center"
        >
          <Grid container justifyContent="center" spacing={3}>
            <Grid item xs={4}>
              <Card
                sx={{ minWidth: 330, height: 290 }}
                variant="outlined"
                style={{ backgroundColor: "rgba(234, 252, 252, 1)" }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 26, mb: 3 }}
                    variant="h5"
                    component="div"
                  >
                    <span className="color">What</span> is investing?
                  </Typography>
                  <Typography sx={{ fontSize: 18 }} variant="body2">
                    Investing is defined as the act of committing capital to an
                    endeavor with the expectation of obtaining an additional
                    profit. Investing in the stock market is the most common way
                    for beginners to gain investment experience.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                sx={{ minWidth: 330, height: 290 }}
                variant="outlined"
                style={{ backgroundColor: "rgba(234, 252, 252, 1)" }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 26, mb: 3 }}
                    variant="h5"
                    component="div"
                    inline
                  >
                    <span className="color">Why</span> should you invest?
                  </Typography>
                  <Typography sx={{ fontSize: 18 }} variant="body2">
                    Investing is a way to set aside money while you are busy
                    with life and have that money work for you so that you can
                    fully reap the rewards of your labor in the future. For
                    instance, an investor can buy a small ownership of a company
                    (also known as a stock) and earn equity from the company's
                    profit.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                sx={{ minWidth: 330, height: 290 }}
                variant="outlined"
                style={{ backgroundColor: "rgba(234, 252, 252, 1)" }}
              >
                <CardContent>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: 26, mb: 3 }}
                    component="div"
                  >
                    <span className="color">Where</span> to get started?
                  </Typography>
                  <Typography sx={{ fontSize: 18 }} variant="body2">
                    Create a brokerage account and figure out what type of
                    investor you are! Some investors want to take an active hand
                    in managing their money's growth, and some prefer to "set it
                    and forget it."
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mt: 10, ml: 7, mr: 7 }} alignItems="center">
          <Grid container justifyContent="center" spacing={5}>
            <Grid item xs={6}>
              <div className="image">
                <img src={image} alt="Online Brokers" className="graphic"></img>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="container">
                <h1 className="title">Online Brokers</h1>
                <p className="about">
                  Brokers are either full-service or discount and allow you to
                  invest in{" "}
                  <b>
                    stocks, bonds, exchange-traded funds (ETFs), index funds,
                    and mutual funds.
                  </b>{" "}
                  Full-service brokers, as give the full range of traditional
                  brokerage services, including financial advice for retirement,
                  healthcare, and everything related to money. They usually only
                  deal with higher-net-worth clients, and they can charge
                  substantial fees, including a percentage of your transactions,
                  a percentage of your assets they manage, and sometimes, a
                  yearly membership fee. However, it is argued that it is worth
                  it because of all the services that are provided
                </p>
                <br />

                <p className="about">
                  Discount brokers are the most popular. Discount online brokers
                  give you tools to select and place your own transactions. As
                  the space of financial services has progressed in the 21st
                  century, online brokers have added more features, including
                  educational materials on their sites and mobile apps.
                </p>
              </div>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mt: 10, ml: 7, mr: 7 }} alignItems="center">
          <Grid container justifyContent="center" spacing={5}>
            <Grid item xs={6}>
              <div className="container">
                <h1 className="title">Robo-Advisors</h1>
                <p className="about">
                  After the 2008 financial crisis, a new breed of investment
                  advisor was born: the robo-advisor.{" "}
                  <b>
                    Robo Advisors use technology and algortihms to lower costs
                    for investors and streamline investment advice.
                  </b>
                </p>
                <br />

                <p className="about">
                  Since Betterment launched, other robo-first companies have
                  been founded, and even established online brokers like Charles
                  Schwab have added robo-like advisory services. According to a
                  report by Charles Schwab, 58% of Americans say they will use
                  some sort of robo-advice by 2025. If you want an algorithm to
                  make investment decisions for you, including tax-loss
                  harvesting and rebalancing, a robo-advisor may be for you.
                </p>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="image">
                <img src={image2} alt="Robo advisors" className="graphic"></img>
              </div>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mt: 10, ml: 7, mr: 7 }} alignItems="center">
          <Grid container justifyContent="center" spacing={5}>
            <Grid item xs={6}>
              <div className="image">
                <img
                  src={image3}
                  alt="Commissions and Fees"
                  className="graphic"
                ></img>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="container">
                <h1 className="title">Commissions and Fees</h1>
                <p className="about">
                  Though recently many brokers have been racing to lower or
                  eliminate commissions on trades, and ETFs offer index
                  investing to everyone who can trade with a bare-bones
                  brokerage account, all brokers have to make money from their
                  customers one way or another. In most cases, your broker will
                  charge a commission every time you trade stock, either through
                  buying or selling.
                </p>
                <br />

                <p className="about">
                  Furthermore brokers will charge investing in mutual funds.{" "}
                  <b>
                    {" "}
                    Mutual funds are professionally managed pools of investor
                    funds that invest in a focused manner, such as large-cap
                    U.S. stocks.
                  </b>{" "}
                  There are many fees an investor will incur when investing in
                  mutual funds. One of the most important fees to consider is
                  the management expense ratio (MER), which is charged by the
                  management team each year based on the number of assets in the
                  fund.
                </p>
              </div>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mt: 10, ml: 7, mr: 7 }} alignItems="center">
          <Grid container justifyContent="center" spacing={5}>
            <Grid item xs={6}>
              <div className="container">
                <h1 className="title">Investing Through Your Employer</h1>
                <p className="about">
                  If you’re on a tight budget, try to{" "}
                  <b>invest just 1% of your salary into the retirement plan</b>
                  available to you at work. The truth is, you probably won't
                  even miss a contribution that small.
                </p>
                <br />

                <p className="about">
                  Work-based retirement plans deduct your contributions from
                  your paycheck <b>before</b> taxes are calculated, which will
                  make the contribution even less painful. When you're
                  comfortable with a 1% contribution, maybe you can increase it
                  as you get annual raises. You're unlikely to miss the
                  additional contributions. If you have a 401(k) retirement
                  account at work, you may already be investing in your future
                  with allocations to mutual funds and even your own company's
                  stock.
                </p>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="image">
                <img
                  src={image4}
                  alt="Investing Through Your Employer"
                  className="graphic"
                ></img>
              </div>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mt: 10, ml: 7, mr: 7 }} alignItems="center">
          <Grid container justifyContent="center" spacing={5}>
            <Grid item xs={6}>
              <div className="image">
                <img
                  src={image5}
                  alt="Diversify and Reduce Risks"
                  className="graphic2"
                ></img>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="container">
                <h1 className="title">Diversify and Reduce Risks</h1>
                <p className="about">
                  Diversification is considered to be the only free lunch in
                  investing. In a nutshell,{" "}
                  <b>
                    by investing in a range of assets, you reduce the risk of
                    one investment's performance severely hurting the return of
                    your overall investment
                  </b>
                  . You could think of it as financial jargon for "don't put all
                  of your eggs in one basket."
                </p>
                <br />

                <p className="about">
                  As mentioned earlier, the costs of investing in a large number
                  of stocks could be detrimental to the portfolio. With a $1,000
                  deposit, it is nearly impossible to have a well-diversified
                  portfolio, so be aware that you may need to invest in one or
                  two companies (at the most) in the first place. This will
                  increase your risk.
                </p>
              </div>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mt: 10, ml: 7 }}>
          <h1 className="title2">Test your Knowledge!</h1>
          <p className="about2">
            Now that you know more about investing take this quick quiz to see
            how much you remember.
          </p>
        </Box>
        <Box
          sx={{ ml: 7, mb: 10 }}
          justifyContent="center"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="box"
        >
          <Button
            href="/quiz"
            variant="contained"
            style={{ textAlign: "center" }}
          >
            Take Quiz
          </Button>
        </Box>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
.box{
  display: flex,
  border: 1px solid black,
  justifyContent: center,
  alignItems: center
  padding: 8
}
.graphic{
  width: 100%;
  height: 500px;
}
.graphic2{
  width: 100%;
  height: 450px;
}
.container {
  margin-left: 2%;
}
.image{
display: inline;
}
.title{
  text-align: left;
  font-size: 32px;

}
.about{
  font-size: 18px;
  text-align: left;
  font-weight: normal;
}
.title2{
  text-align: left;
  font-size: 32px;
  text-align: center;

}
.about2{
  font-size: 18px;
  text-align: left;
  font-weight: normal;
  text-align: center;
}
`;
