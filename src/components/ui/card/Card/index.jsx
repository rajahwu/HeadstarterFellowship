import React from 'react';
// import { Card as CardWrapper, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import Input  from '../../input';
import Checkbox from '../../checkbox';
import Button from '../../button';

export default function Card({ title, description, btnText = null, inputText = null, checkbox = null, checkboxId = null, checkboxLabelText = null }) {
  return (
    <CardWrapper>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {inputText !== null && (
          <form>
            <Input placeholder={inputText} />
          </form>
        )}
        {checkbox !== null && (
          <div className="flex items-center space-x-2">
            <Checkbox id={checkboxId} defaultChecked />
            <label
              htmlFor={checkboxId}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {checkboxLabelText}
            </label>
          </div>
        )}
      </CardContent>
      {btnText && (
        <CardFooter className="border-t px-6 py-4">
          <Button>{btnText}</Button>
        </CardFooter>
      )}
    </CardWrapper>
  );
}

function CardWrapper({ children }) {
    return <div>{ children }</div>
}

function CardHeader({ children }) {
  return <hgroup>{children}</hgroup>;
}

function CardTitle({ children }) {
  return <h2 className="card-title">{children}</h2>;
}

function CardDescription({ children }) {
  return <p>{children}</p>;
}

function CardContent({ children }) {
  return <div className="card-body">{children}</div>;
}

function CardFooter({ children }) {
  return <div className="card-actions">{children}</div>;
}
