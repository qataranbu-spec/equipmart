
import React from 'react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';

const Register = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Register</h1>
        <p className="text-muted-foreground">
          Create your EQP+MART account to get started.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
