import React from 'react'

const About = () => {
  return (
    <div>
      <div class="card mb-3" style={{width:"60%",marginLeft:"20%",marginTop:"8%"}}>
  <img src={require('../images/score.gif')}  style={{width:"35%",marginLeft:"30%"}}class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">How to Improve Your Credit Score </h5>
    <p class="card-text">What is a credit score?
A credit score is a prediction of your credit behavior, such as how likely you are to pay a loan back on time, based on information from your credit reports.
Companies use credit scores to make decisions on whether to offer you a mortgage, credit card, auto loan, and other credit products, as well as for tenant screening and insurance. They are also used to determine the interest rate and credit limit you receive.
Companies use a mathematical formula—called a scoring model—to create your credit score from the information in your credit report.
Factors that are typically taken into account by credit scoring models include:
Your bill-paying history
Your current unpaid debt
The number and type of loan accounts you have
How long you have had your loan accounts open
How much of your available credit you’re using
New applications for credit
Whether you have had a debt sent to collection, a foreclosure, or a bankruptcy, and how long ago
You do not have just “one” credit score. Each credit score depends on the data used to calculate it, and it may differ depending on the scoring model (which itself may depend on the type of loan product the score will be used for), the source of the data used, and even the day when it was calculated.

Usually a higher score makes it easier to qualify for a loan and may result in a better interest rate or loan terms. Most credit scores range from 300-850.</p>
    <p class="card-text"><small class="text-muted">Last updated 2 days ago</small></p>
  </div>
</div>
</div>



    
  )
}

export default About
