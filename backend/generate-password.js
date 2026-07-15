
const bcrypt = require('bcryptjs');

async function generateHash() {
  const password = process.argv[2];  

  if (!password) {
    console.log('');
    console.log('  ❌  No password provided!');
    console.log('');
    console.log('  Usage:');
    console.log('    node generate-password.js yourPasswordHere');
    console.log('');
    process.exit(1);
  }

  console.log('');
  console.log('  Generating secure hash...');


  const saltRounds = 12;
  const hash = await bcrypt.hash(password, saltRounds);

  console.log('');
  console.log('  ✅  Hash generated successfully!');
  console.log('');
  console.log('  Copy this hash and paste it into your .env file');
  console.log('  as the value for ADMIN_PASSWORD_HASH:');
  console.log('');
  console.log('  ┌─────────────────────────────────────────────────────────┐');
  console.log(`  │  ${hash}  │`);
  console.log('  └─────────────────────────────────────────────────────────┘');
  console.log('');
  console.log('  Your .env should look like this:');
  console.log('');
  console.log(`  ADMIN_PASSWORD_HASH=${hash}`);
  console.log('');
  console.log('  ⚠️   Never share this hash or your .env file with anyone!');
  console.log('');
}

generateHash();
