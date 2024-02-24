// database.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://shuttle_school:Vr788JIVd7hetpmI@cluster0.qwhu9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
  ],
})
export class DatabaseModule {}
