import { runSeed } from 'src/db/seeds/for-test';
import { exit } from 'process';
import dataSource from 'src/db/data-source';

async function main() {
  await dataSource.initialize();
  await runSeed(dataSource);
  await dataSource.destroy();
}

main()
  .catch((e) => {
    console.error(e);
    exit(1);
  })
  .then(() => {
    console.log('Seed done successfully!');
    exit(0);
  });
