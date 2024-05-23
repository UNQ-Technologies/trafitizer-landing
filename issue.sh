#!/bin/bash

###############################################################################
# Title: Create GitHub Issue
#
# Description: This script creates a new issue in a GitHub repository. It
#              automatically applies the 'bug' label if the '-f' argument is
#              not provided, or the 'enhancement' label if the '-f' argument
#              is present. It also creates a new branch for the issue, links
#              the branch to the issue, assigns the issue to the user, and
#              switches to the newly created branch.
#
# Author: Amjed Ali (@amjed-ali-k)
###############################################################################

# Set the repository owner and name
OWNER="UNQ-Technologies"
REPO="trafitizer-landing"

# Set the labels based on the '-f' argument
if [[ "$*" == *"-f"* ]]; then
    LABELS="enhancement"
else
    LABELS="bug"
fi

# Extract the title from the arguments
TITLE=$(echo "$*" | sed -e 's/.*-t \(.*\)/\1/')

# Generate a random issue ID
ISSUE_ID=$(openssl rand -hex 4)

# Get the current date and time
CURRENT_TIME=$(date +'%Y-%m-%d %H:%M:%S')

# Get the author's name and email
AUTHOR_NAME=$(git config --get user.name)
AUTHOR_EMAIL=$(git config --get user.email)

# Create the issue body
ISSUE_BODY=$(cat <<-END
**Created Time:** $CURRENT_TIME
**Author:** $AUTHOR_NAME ($AUTHOR_EMAIL)
**Random ID:** $ISSUE_ID

END
)

# Create a new issue
ISSUE=$(gh issue create --repo "$OWNER/$REPO" --title "$TITLE" --body "$ISSUE_BODY" --label "$LABELS" --assignee "@me")

# Create a new branch for the issue
gh issue develop $ISSUE --repo "$OWNER/$REPO" --base "$(git rev-parse --abbrev-ref HEAD)" -c


echo "New issue #$ISSUE created and assigned to you. Branch created and linked to the issue."