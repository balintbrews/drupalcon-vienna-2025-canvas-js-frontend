#!/bin/bash

REPO_URL="git@git.drupal.org:project/canvas.git"
CONTRIB_DIR="web/modules/contrib"
TARGET_DIR="web/modules/contrib/canvas"

CHECK_ONLY=false
if [ "$1" = "--check-only" ] || [ "$1" = "-c" ]; then
    CHECK_ONLY=true
fi

if [ ! -d "$TARGET_DIR" ]; then
    if [ "$CHECK_ONLY" = true ]; then
        echo
        echo "Error: Drupal Canvas module not found."
        echo "The $TARGET_DIR directory does not exist."
        echo
        echo "To fix this, run:"
        echo "  ./scripts/clone-repo.sh"
        echo
        echo "This will clone the Drupal Canvas module repository to the correct location."
        echo "Then run \`composer install\` again."
        echo
        exit 1
    else
        echo "Directory $TARGET_DIR doesn't exist, cloning repository…"
        
        # Create contrib directory if it doesn't exist.
        mkdir -p "$CONTRIB_DIR"
        
        git clone "$REPO_URL" "$TARGET_DIR"
        
        if [ $? -eq 0 ]; then
            echo "Repository cloned successfully to $TARGET_DIR."
        else
            echo "Error: Failed to clone repository."
            exit 1
        fi
    fi
else
    if [ "$CHECK_ONLY" = true ]; then
        echo "Drupal Canvas module found at web/modules/contrib/canvas."
    else
        echo "Directory $TARGET_DIR already exists, skipping clone."
    fi
fi
