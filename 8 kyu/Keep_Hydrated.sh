#!/bin/bash
time=$1

awk "BEGIN {print int(0.5 * $time)}"

# https://www.codewars.com/kata/582cb0224e56e068d800003c/train/shell
