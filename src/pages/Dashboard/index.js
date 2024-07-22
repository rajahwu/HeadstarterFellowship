// src/pages/Dashboard.js

import React from 'react';
import BaseLayout from '../../components/layouts/Base';
import Header from '../../components/ui/header';
import Card from '../../components/ui/card/Card';
import { Link } from 'react-router-dom';

const cardData = [
  {
    title: "Store Name",
    description: "Used to identify your store in the marketplace.",
    inputText: "Store Name",
    btnText: "Save",
  },
  {
    title: "Plugins Directory",
    description: "The directory within your project, in which your plugins are located.",
    inputText: "/content/plugins",
    checkbox: true,
    checkboxId: "include",
    checkboxLabelText: "Allow administrators to change the directory.",
    btnText: "Save",
  },
  // Add more objects as needed for testing
];

export default function Dashboard() {
  return (
    <BaseLayout> 
      <Header />
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Settings</h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav className="grid gap-4 text-sm text-muted-foreground" x-chunk="dashboard-04-chunk-0">
            <Link to="#" className="font-semibold text-primary">General</Link>
            <Link to="#">Security</Link>
            <Link to="#">Integrations</Link>
            <Link to="#">Support</Link>
            <Link to="#">Organizations</Link>
            <Link to="#">Advanced</Link>
          </nav>
          <div className="grid gap-6">
            {cardData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                btnText={card.btnText}
                inputText={card.inputText}
                checkbox={card.checkbox}
                checkboxId={card.checkboxId}
                checkboxLabelText={card.checkboxLabelText}
              />
            ))}
          </div>
        </div>
      </main>
    </BaseLayout>
  );
}
