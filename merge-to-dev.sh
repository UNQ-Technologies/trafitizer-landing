#!/bin/bash
###############################################################################
# Title: Merge Branch into Development
#
# Description: This script merges the current branch into the "development"
#              branch using the GitHub CLI (gh). It excludes specific branches
#              like "development", "production", "testing", and "beta" from
#              being merged. The script creates a pull request and merges it
#              without squashing commits.
#
# Author: Amjed Ali (@amjed-ali-k)
###############################################################################

# Set the repository owner and name
OWNER="UNQ-Technologies"
REPO="trafitizer-landing"


# Set the base (target) branch
BASE_BRANCH="main"

# Set the list of excluded branches
EXCLUDED_BRANCHES=("main" "test" "testing" "beta")

# Get the current branch name
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Check if the current branch is in the list of excluded branches
if [[ " ${EXCLUDED_BRANCHES[*]} " =~ " ${CURRENT_BRANCH} " ]]; then
    echo "Cannot merge $CURRENT_BRANCH into $BASE_BRANCH. Skipping..."
    exit 0
fi

git push -u origin "$CURRENT_BRANCH"

# Create a new pull request
PULL_REQUEST=$(gh pr create --repo "$OWNER/$REPO" --head "$CURRENT_BRANCH" --base "$BASE_BRANCH" --title "🔀 Merge $CURRENT_BRANCH into $BASE_BRANCH" --body ":boom: Merge $CURRENT_BRANCH into $BASE_BRANCH")

# Extract the pull request number from the output
PR_NUMBER=$(echo "$PULL_REQUEST" | grep -oE '#[0-9]+' | tr -d '#')

# Merge the pull request without squashing commits
gh pr merge "$PR_NUMBER" --repo "$OWNER/$REPO" --auto --merge --delete-branch -t ":truck: Auto Merge $HEAD_BRANCH into $BASE_BRANCH"

git checkout "$BASE_BRANCH"
git branch -d "$CURRENT_BRANCH"
echo "Pull request #$PR_NUMBER merged successfully!"