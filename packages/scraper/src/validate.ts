import type { Manifest } from "./types.js";

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isValidTopic(value: unknown): boolean {
  if (!isObject(value)) return false;
  return (
    typeof value["id"] === "string" &&
    typeof value["title"] === "string" &&
    typeof value["description"] === "string" &&
    typeof value["path"] === "string" &&
    typeof value["tokens"] === "number" &&
    Array.isArray(value["tags"]) &&
    value["tags"].every((t: unknown) => typeof t === "string")
  );
}

function isValidLibrary(value: unknown): boolean {
  if (!isObject(value)) return false;
  return (
    typeof value["id"] === "string" &&
    typeof value["name"] === "string" &&
    typeof value["description"] === "string" &&
    typeof value["version"] === "string" &&
    Array.isArray(value["topics"]) &&
    value["topics"].every(isValidTopic)
  );
}

export function validateManifest(data: unknown): data is Manifest {
  if (!isObject(data)) return false;
  return (
    typeof data["version"] === "number" &&
    typeof data["updatedAt"] === "string" &&
    Array.isArray(data["libraries"]) &&
    data["libraries"].every(isValidLibrary)
  );
}
