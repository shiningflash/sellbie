import { ApolloError } from 'apollo-server-express';
import { ArgumentsHost } from '@nestjs/common';
import { Catch } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';
import { GqlExceptionFilter } from '@nestjs/graphql';

@Catch(BadRequestException)
export class GraphQLErrorFilter implements GqlExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const response = exception.getResponse();

    if (typeof response === 'object') {
      // Directly throw ApolloError with the response
      throw new ApolloError('Validation error', 'VALIDATION_ERROR', response);
    } else {
      throw new ApolloError('Bad Request');
    }
  }
}