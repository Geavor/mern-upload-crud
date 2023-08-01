import express from 'express';
import fileUpload from 'express-fileupload';
import postsRoutes from './routes/posts.routes.js';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

//middleware
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: './upload',
  })
);

//routes
app.use('/api', postsRoutes);

app.use(express.static(join(__dirname, '../client/dist')));

app.get('*', (req,res) => {
  res.sendFile((join(__dirname, '../client/dist/index.html')));
})

export default app;
