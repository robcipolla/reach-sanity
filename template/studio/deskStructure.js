

import S from "@sanity/desk-tool/structure-builder";

// Icons
import {
  RiSettings3Fill,
  RiSettings3Line,
  RiPaintBrushLine,
  RiUser3Line,
  RiArticleLine,
  RiHome3Line,
  RiHome3Fill,
  RiQuestionAnswerFill,
  RiQuestionMark,
} from "react-icons/ri";
import {
  BsSignpostSplit,
  BsNewspaper,
  BsFolder,
  BsEnvelopeOpen,
} from "react-icons/bs";

export default () =>
  S.list()
    .title("Dashboard")
    .items([
      // Site Settings
      S.listItem()
        .title("Site Settings")
        .icon(RiSettings3Fill)
        .child(
          S.list()
            .title("Site Settings")
            .items([
              // General Settings
              S.listItem()
                .title("General settings")
                .icon(RiSettings3Line)
                .child(
                  S.document()
                    .title("General Settings")
                    .documentId("generalSettings")
                    .schemaType("generalSettings")
                    .views([S.view.form()])
                ),
              // Contact Details
              S.listItem()
                .title("Contact Details")
                .icon(BsEnvelopeOpen)
                .child(
                  S.document()
                    .title("Contact Details")
                    .documentId("contactDetails")
                    .schemaType("contactDetails")
                    .views([S.view.form()])
                ),
              // Site branding
              S.listItem()
                .title("Site Branding")
                .icon(RiPaintBrushLine)
                .child(
                  S.document()
                    .title("Site Branding")
                    .documentId("siteBranding")
                    .schemaType("siteBranding")
                    .views([S.view.form()])
                ),
            ])
        ),
      S.divider(),
      // Single Pages
      // Home
      S.listItem()
        .title("Home Page")
        .icon(RiHome3Fill)
        .child(
          S.document()
            .title("Home Page")
            .documentId("home")
            .schemaType("homePage")
            .views([S.view.form()])
        ),
      // About
      S.listItem()
        .title("About Page")
        .icon(RiQuestionMark)
        .child(
          S.document()
            .title("About Page")
            .documentId("about")
            .schemaType("aboutPage")
            .views([S.view.form()])
        ),
      S.divider(),
      // Blog
      S.listItem()
        .title("Posts")
        .icon(BsNewspaper)
        .child(
          S.documentTypeList('post')
        ),
    ]);