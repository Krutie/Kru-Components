import { join } from "path";

export default function() {
  // Make sure @nuxt/components is available
  this.requireModule("@nuxt/components");

  this.nuxt.hook("components:dirs", (dirs) => {
    // Add ./components dir to the list
    dirs.push({
      path: join(__dirname, "components"),
      prefix: "kru",
    });
  });
}
