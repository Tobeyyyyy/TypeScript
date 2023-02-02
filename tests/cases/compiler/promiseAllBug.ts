

// @filename: tsconfig.json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",                               
    "esModuleInterop": true,                             
    "forceConsistentCasingInFileNames": true,    
    "strict": true,                              
    "skipLibCheck": true,                       
    "noEmit": true
  }
}

// @filename: MyType.ts
type MyType = {} | null | undefined;

const myVar: MyType = null as MyType;

myVar?.toLocaleString;
const x = myVar;

// @filename: index.ts
async function myUnusedFunction() {
  const fetch1 = Promise.resolve(['hello', 'world']);
  const [data1] = await Promise.all([fetch1]);
  data1.length; abc abc
} 