
type TextureUse =
| { edition: "bedrock" | "dungeons" }
| { edition: "java"; type: "resource_pack"; assets: string }
| { edition: "java"; type: "texture_pack" };

const a: TextureUse = {
    edition: "bedrock",
    type: "resource_pack"
}