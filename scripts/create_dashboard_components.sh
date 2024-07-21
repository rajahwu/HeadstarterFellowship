#!/bin/bash

# Base directory for components
base_dir="src/components/ui"

# Array of components
components=(
  "button"
  "card/CardContent"
  "card/CardDescription"
  "card/CardFooter"
  "card/CardHeader"
  "card/CardTitle"
  "checkbox"
  "dropdown-menu/DropdownMenuContent"
  "dropdown-menu/DropdownMenuItem"
  "dropdown-menu/DropdownMenuLabel"
  "dropdown-menu/DropdownMenuSeparator"
  "dropdown-menu/DropdownMenuTrigger"
  "input"
  "sheet/SheetContent"
  "sheet/SheetTrigger"
)

# Create directories and index.js files
for component in "${components[@]}"; do
  # Determine component directory and name
  dir="$base_dir/$(dirname $component)"
  name="$(basename $component)"
  
  # Create directory if it doesn't exist
  mkdir -p "$dir/$name"
  
  # Create index.js file
  touch "$dir/$name/index.js"
  
  # Optionally, add a basic export statement in index.js
  echo "export default function $name() { return null; }" > "$dir/$name/index.js"
  
  echo "Created $dir/$name/index.js"
done

echo "All components have been created."
