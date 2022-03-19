#!/bin/bash

uvicorn main:app --reload --host $BACKEND_HOST --port $BACKEND_PORT