import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  return (
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      id="submit-email"
    >
      <input
        type="hidden"
        name="access_key"
        value="97674e75-f296-4b8f-8af4-030253ad6d2f"
      />
      <FieldSet className="mt-5
      md: ">
        <FieldLegend>Interested?</FieldLegend>
        <FieldDescription>Let's work together!.</FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="email">Full Email</FieldLabel>
            <Input id="email" name="email" autoComplete="off" placeholder="Email here" />
            <FieldDescription>This is how will I contact you.</FieldDescription>
          </Field>

          <Field>
            <FieldLabel htmlFor="name">Name</FieldLabel>
            <Input id="name" name="name" autoComplete="off" placeholder="Name" />
            {/* aria-invalid */}
          </Field>

          <Field>
            <FieldLabel htmlFor="name">Message</FieldLabel>
            <Textarea id="message" name="message" autoComplete="off" placeholder="Message" />
          </Field>

          <Button variant={"default"} id="submit-email">Send</Button>

          {/* <Field orientation="horizontal">
            <Switch id="newsletter" />
            <FieldLabel htmlFor="newsletter">
              I'm interested working with you.
            </FieldLabel>
          </Field> */}
        </FieldGroup>
      </FieldSet>
    </form>
  );
}
