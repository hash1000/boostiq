"use client";
import { useEffect, useState } from "react";
import { Editor, EditorState, RichUtils, Modifier } from "draft-js";
import "draft-js/dist/Draft.css";
import { FaBold, FaItalic, FaUnderline, FaEyeDropper, FaSearchPlus, FaSearchMinus } from "react-icons/fa";
import { PiTextAUnderlineBold, PiTextAaBold } from "react-icons/pi";
import { IoMdLink } from "react-icons/io";
import { MdFormatAlignLeft, MdFormatAlignCenter, MdFormatAlignRight, MdFormatListNumbered } from "react-icons/md";

export default function TextEditor() {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const [mounted, setMounted] = useState(false);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent SSR issues

  const handleKeyCommand = (command: string, editorState: EditorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  const toggleInlineStyle = (style: string) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const toggleBlockType = (blockType: string) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  const addLink = () => {
    const selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      const url = prompt("Enter a link:");
      if (url) {
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity("LINK", "MUTABLE", { url });
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newContentState = Modifier.applyEntity(contentStateWithEntity, selection, entityKey);
        setEditorState(EditorState.push(editorState, newContentState, "apply-entity"));
      }
    }
  };

  const zoomIn = () => setZoom((prev) => Math.min(prev + 0.1, 2));
  const zoomOut = () => setZoom((prev) => Math.max(prev - 0.1, 0.5));

  return (
    <div className=" p-4  h-full w-full flex flex-col" style={{ transform: `scale(${zoom})`, transformOrigin: "top left" }}>
      <div className="bg-[#A0E4FF]  w-[95%] mx-auto  mb-16 flex-1 p-4">
        <Editor 
          editorState={editorState} 
          onChange={setEditorState} 
          handleKeyCommand={handleKeyCommand}
        />
      </div>
      
      {/* Toolbar */}
      <div className="mb-2 flex justify-center  gap-5 3xl:gap-2.5 flex-wrap bg-[#A0E4FF] p-2">
  <button onClick={() => toggleInlineStyle("BOLD")} className="p-2 Icon"><FaBold /></button>
  <button onClick={() => toggleInlineStyle("ITALIC")} className="p-2 Icon"><FaItalic /></button>
  <button onClick={() => toggleInlineStyle("UNDERLINE")} className="p-2 Icon"><FaUnderline /></button>
  <button className="p-2 Icon"><FaEyeDropper /></button>
  <button onClick={addLink} className="p-2 Icon"><IoMdLink /></button>
  <button onClick={() => toggleBlockType("unordered-list-item")} className="p-2 Icon">UL</button>
  <button onClick={() => toggleBlockType("ordered-list-item")} className="p-2 Icon"><MdFormatListNumbered /></button>
  <button onClick={() => toggleInlineStyle("BOLD")} className="p-2 Icon"><PiTextAUnderlineBold /></button>
  <button onClick={() => toggleInlineStyle("ITALIC")} className="p-2 Icon"><PiTextAaBold /></button>
  <button onClick={() => toggleBlockType("left-align")} className="p-2 Icon"><MdFormatAlignLeft /></button>
  <button onClick={() => toggleBlockType("center-align")} className="p-2 Icon"><MdFormatAlignCenter /></button>
  <button onClick={() => toggleBlockType("right-align")} className="p-2 Icon"><MdFormatAlignRight /></button>
  <button onClick={zoomIn} className="p-2 Icon"><FaSearchPlus /></button>
  <button onClick={zoomOut} className="p-2 Icon"><FaSearchMinus /></button>
</div>
    </div>
  );
}
