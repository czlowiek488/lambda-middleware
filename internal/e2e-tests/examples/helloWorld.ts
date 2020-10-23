import "reflect-metadata";

import { classValidator } from "@lambda-middleware/class-validator";
import { compose } from "@lambda-middleware/compose";
import { cors } from "@lambda-middleware/cors";
import { errorHandler } from "@lambda-middleware/http-error-handler";
import { jsonSerializer } from "@lambda-middleware/json-serializer";

import { IsString } from "class-validator";

// Define a validator for the body via class-validator
class NameBody {
  @IsString()
  public firstName: string = "";

  @IsString()
  public lastName: string = "";
}

// This is your AWS handler
async function helloWorld(event: { body: NameBody }) {
  // Thanks to the validation middleware you can be sure body is typed correctly
  return {
    message: `Hello ${event.body.firstName} ${event.body.lastName}`,
  };
}

const wrapper = compose(
  // add cors headers last so even error responses from the
  // errorHandler middleware have cors headers applied
  cors(),
  errorHandler(),
  jsonSerializer(),
  classValidator({
    bodyType: NameBody,
  })
);

export const handler = wrapper(helloWorld);
