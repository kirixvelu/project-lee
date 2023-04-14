---
layout: article
title: Automating the Git Workflow for Continuous DevOps
date: 2022-12-19
category: "Automation"
---

Automation testing is a software testing technique that uses special automated testing software tools to execute a test case suite. Manual testing, on the other hand, is carried out by a human sitting in front of a computer and carefully carrying out the test steps. The software can also enter test data into the System Under Test, compare expected and actual results, and generate detailed test reports. Software test automation necessitates significant financial and resource investments. 

<!-- excerpt -->

Test automation is the most effective way to improve software testing effectiveness, test coverage, and execution speed. Manual Testing of all workflows, fields and negative scenarios takes time and money. In software testing, test automation does not require human intervention. 

## Understanding GitHub Actions 

GitHub Actions is a CI/CD platform for automating your build, test, and deployment pipeline. You can build and test each pull request to your repository and deploy merged pull requests to production. GitHub Actions extends beyond DevOps by allowing you to run workflows when other events occur in your repository. You can, for example, run a workflow that adds the appropriate labels whenever someone creates a new issue in your repository. To run your workflows, GitHub provides virtual machines for Linux, Windows, and macOS, or you can host your self-hosted runners in your data center or cloud infrastructure.  

## The Concepts Behind a GitHub Actions Workflow 

GitHub Actions is a native CI/CD tool for GitHub that runs alongside your code. You may have noticed a "Actions" tab in a GitHub repository at some point (hint: that's where GitHub Actions is). When you first open this tab, you'll see a brief description of what GitHub Actions is and some suggested workflows for your repository. That's when the fun begins. In the GitHub Marketplace, there are over 13,000 pre-written and tested CI/CD workflows and pre-built automation, as well as the ability to write your workflows (or customize an existing workflow) in simple YAML files. 

## The Components of GitHub Actions

1. Workflows

It is defined in a repository's .GitHub/workflows directory and a repository can have multiple workflows, each of which can perform a unique set of tasks. 

2. Events

It is a specific activity in a repository that origin a workflow to run. When a person creates a pull request, opens an issue, or pushes a commit to a repository. for example, activity can come from GitHub.  

3. Jobs

A job is a collection of workflow steps that run on the same runner. Each step is either a shell script to be executed or an action to be performed. Steps are carried out sequentially and are interdependent. Because each step is executed on the same runner, data can be shared from one step to the next. 

4. Actions

It is a GitHub actions platform custom application that handles a complicated but frequently repeated task. Reduce the amount of repetitive code in your workflow files by using actions. An action can download your git repository from GitHub and install the toolchain required for your build environment. 

5. Runners

When your workflows are triggered, they are executed by a runner. Each runner can only run one job at a time. To run your workflows, GitHub provides Ubuntu Linux, Microsoft Windows, and macOS runners; each workflow run executes in a new, freshly provisioned virtual machine. You can host your own runners if you require a different operating system or a specific hardware configuration. 

Of course, Github is the best place to get started. 