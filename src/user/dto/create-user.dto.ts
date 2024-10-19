import { IsNumber, IsOptional, IsString } from 'class-validator';
import { User } from '../user.schema';
import { Expose } from 'class-transformer';

export class CreateUserDto {
  @Expose()
  @IsNumber()
  telegramId: number;

  @Expose()
  @IsString()
  username: string;

  @Expose()
  @IsOptional()
  contacts: User[] = [];

  @Expose()
  @IsOptional()
  avatar: string | null = null;

  @Expose()
  @IsOptional()
  description: string | null = null;

  @Expose()
  @IsOptional()
  walletAddress: string | null = null;
}
