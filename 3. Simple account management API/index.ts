import express from 'express';

// Define the shape of an account.
interface Account {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
}
 
const app = express();
 
app.use(express.json());
 
let accounts: Record<string, Account> = {};

// Generate a new ID for each new account.
let nextId = 1;

// Route to create a new account.
app.post('/accounts', (req, res) => {
  const account: Account = {
    id: nextId.toString(),
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    email: req.body.email,
  };
  accounts[account.id] = account;
  nextId++;
  res.json(account);
});

// Route to get an existing account.
app.get('/accounts/:id', (req, res) => {
  const account = accounts[req.params.id];
  if (account) {
    res.json(account);
  } else {
    res.status(404).send('Account not found');
  }
});

// Route to update an existing account.
app.put('/accounts/:id', (req, res) => {
  const account = accounts[req.params.id];
  if (account) {
    account.name = req.body.name;
    account.address = req.body.address;
    account.phone = req.body.phone;
    account.email = req.body.email;
    res.json(account);
  } else {
    res.status(404).send('Account not found');
  }
});

// Route to delete an account.
app.delete('/accounts/:id', (req, res) => {
  const account = accounts[req.params.id];
  if (account) {
    delete accounts[req.params.id];
    res.status(204).send();
  } else {
    res.status(404).send('Account not found');
  }
});

// Start the application on port 3000.
app.listen(3000, () => {
  console.log('Application is listening on port 3000');
});
