# DamBreachResearch.github.io
## Dam Failure Prediction Web Application

This web application is the product of research conducted for a Master’s thesis focused on improving the prediction of dam failure characteristics using empirical and recalibrated equations. The tool provides an accessible interface allowing users to input dam geometry and other relevant characteristics and receive predicted failure parameters, including optional confidence intervals derived from the research.

The goal of this project is to support engineers, researchers, and students by offering a practical and transparent implementation of widely used dam breach estimation equations, along with improved versions calibrated during the research phase.

## Project Overview

Dam breach modeling is a crucial component of risk assessment, emergency planning, and hydraulic analysis. Traditional empirical equations—while widely applied—often exhibit considerable prediction variability.
This project addresses that limitation by:

- Implementing standard empirical dam breach equations.
- Providing recalibrated equations based on the thesis research.
- Presenting confidence intervals for predicted outputs, derived from statistical analysis of model error.
- Offering a clear, user-friendly interface for entering dam properties and viewing results.

The application is built using Next.js, ensuring fast performance, a modern development workflow, and scalable front-end architecture.

## Features

- Input form for dam geometry and failure-related characteristics, including:
  - Dam height
  - Height of water above breach
  - Depth of breach below crest
  - Reservoir live storage volume
  - Material erodibility
  - Failure mode: piping or overtopping
  - Dam type: homogenous-fill or core-wall
- Prediction of dam failure characteristics, such as:
  -  Peak breach outflow
  -  Breach formation time
  -  Breach width (unimplemented)
- Multiple equation modes:
  -  Standard empirical equations
  -  Recalibrated equations produced for this thesis
  -  Confidence interval estimation for prediction error

## Research Background

The recalibrated equations and confidence intervals incorporated into this application were developed as part of the author's Master’s thesis. The research involved:

- Compiling and cross-referencing a dataset of historical dam failures
- Performing statistical regression and residual analysis
- Evaluating prediction error distributions
- Deriving updated coefficients and uncertainty bounds

These results are presented in detail in the thesis document and summarized in the application for user accessibility.
- (thesis to be linked here when published)

