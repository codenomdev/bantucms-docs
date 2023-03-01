<template>
  <div class="search-box">
    <input
      ref="input"
      aria-label="Search"
      :value="query"
      :class="{ focused: focused }"
      placeholder="Looking for something specific?"
      autocomplete="off"
      spellcheck="false"
      @input="query = $event.target.value"
      @focus="focused = true"
      @blur="focused = false"
      @keyup.enter="go(focusIndex)"
      @keyup.up="onUp"
      @keyup.down="onDown"
    />
    <ul
      v-if="showSuggestions"
      class="suggestions"
      :class="{ 'align-right': alignRight }"
      @mouseleave="unfocus"
    >
      <li
        v-for="(s, i) in suggestions"
        :key="i"
        class="suggestion"
        :class="{ focused: i === focusIndex }"
        @mousedown="go(i)"
        @mouseenter="focus(i)"
      >
        <a :href="s.path" @click.prevent>
          <span class="page-title">{{ s.title || s.path }}</span>
          <span v-if="s.header" class="header">&gt; {{ s.header.title }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import matchQuery from "@vuepress/plugin-search/match-query";
// require("@vuepress/plugin-search/match-query");
/* global SEARCH_MAX_SUGGESTIONS, SEARCH_PATHS, SEARCH_HOTKEYS */
export default {
  name: "SearchBoxCustom",
  data() {
    return {
      query: "",
      focused: false,
      focusIndex: 0,
    };
  },
  computed: {
    showSuggestions() {
      return this.focused && this.suggestions && this.suggestions.length;
    },
    suggestions() {
      const query = this.query.trim().toLowerCase();
      if (!query) {
        return;
      }
      const { pages } = this.$site;
      const max =
        this.$site.themeConfig.searchMaxSuggestions || SEARCH_MAX_SUGGESTIONS;
      const localePath = this.$localePath;
      const res = [];
      for (let i = 0; i < pages.length; i++) {
        if (res.length >= max) break;
        const p = pages[i];
        // filter out results that do not match current locale
        if (this.getPageLocalePath(p) !== localePath) {
          continue;
        }
        // filter out results that do not match searchable paths
        if (!this.isSearchable(p)) {
          continue;
        }
        if (matchQuery(query, p)) {
          res.push(p);
        } else if (p.headers) {
          for (let j = 0; j < p.headers.length; j++) {
            if (res.length >= max) break;
            const h = p.headers[j];
            if (h.title && matchQuery(query, p, h.title)) {
              res.push(
                Object.assign({}, p, {
                  path: p.path + "#" + h.slug,
                  header: h,
                })
              );
            }
          }
        }
      }
      return res;
    },
    // make suggestions align right when there are not enough items
    alignRight() {
      const navCount = (this.$site.themeConfig.nav || []).length;
      const repo = this.$site.repo ? 1 : 0;
      return navCount + repo <= 2;
    },
  },
  mounted() {
    document.addEventListener("keydown", this.onHotkey);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.onHotkey);
  },
  methods: {
    getPageLocalePath(page) {
      for (const localePath in this.$site.locales || {}) {
        if (localePath !== "/" && page.path.indexOf(localePath) === 0) {
          return localePath;
        }
      }
      return "/";
    },
    isSearchable(page) {
      let searchPaths = SEARCH_PATHS;
      // all paths searchables
      if (searchPaths === null) {
        return true;
      }
      searchPaths = Array.isArray(searchPaths)
        ? searchPaths
        : new Array(searchPaths);
      return (
        searchPaths.filter((path) => {
          return page.path.match(path);
        }).length > 0
      );
    },
    onHotkey(event) {
      if (
        event.srcElement === document.body &&
        SEARCH_HOTKEYS.includes(event.key)
      ) {
        this.$refs.input.focus();
        event.preventDefault();
      }
    },
    onUp() {
      if (this.showSuggestions) {
        if (this.focusIndex > 0) {
          this.focusIndex--;
        } else {
          this.focusIndex = this.suggestions.length - 1;
        }
      }
    },
    onDown() {
      if (this.showSuggestions) {
        if (this.focusIndex < this.suggestions.length - 1) {
          this.focusIndex++;
        } else {
          this.focusIndex = 0;
        }
      }
    },
    go(i) {
      if (!this.showSuggestions) {
        return;
      }
      this.$router.push(this.suggestions[i].path);
      this.query = "";
      this.focusIndex = 0;
    },
    focus(i) {
      this.focusIndex = i;
    },
    unfocus() {
      this.focusIndex = -1;
    },
  },
};
</script>

<style lang="stylus">
.home {
  .hero {
    .search-box {
      margin: 1.83rem auto;
      display: block;
      max-width: 35rem;
      position: relative;

      input {
        width: 100%;
        height: 2.7rem;
        line-height: 2.7rem;
        background-position-x: 0.8rem;
        background-position-y: 0.8rem;
        font-size: 1rem;
        max-width: 29.5rem;
        position: relative;
        cursor: text;
        color: lighten($textColor, 25%);
        display: inline-block;
        border: 1px solid darken($borderColor, 10%);
        border-radius: 0.7rem;
        padding: 0 0.5rem 0 2.7rem;
        outline: none;
        transition: all 0.2s ease;
        background-size: 1rem;

        &:focus {
          cursor: auto;
          border-color: $accentColor;
        }
      }

      ul.suggestions {
        margin: 15px auto;
        display: block;
        position: absolute;
        max-width: 30rem;
        width: 100%;
        left: 0;
        right: 0;
      }

      .suggestions {
        background: #fff;
        position: absolute;
        top: 2 rem;
        border: 1px solid darken($borderColor, 10%);
        border-radius: 6px;
        padding: 0.4rem;
        list-style-type: none;

        &.align-right {
          right: 0;
        }
      }

      .suggestion {
        line-height: 1.4;
        padding: 0.4rem 0.6rem;
        border-radius: 4px;
        cursor: pointer;

        a {
          white-space: normal;
          color: lighten($textColor, 35%);

          .page-title {
            font-weight: 600;
          }

          .header {
            font-size: 0.9em;
            margin-left: 0.25em;
          }
        }

        &.focused {
          background-color: #f3f4f5;

          a {
            color: $accentColor;
          }
        }
      }
    }

    @media (max-width: $MQNarrow) {
      .search-box {
        input {
          cursor: pointer;
          width: 10rem;
          border-color: darken($borderColor, 10%);
          position: relative;

          &:focus {
            cursor: text;
            left: 0;
            width: 15rem;
          }
        }
      }
    }

    // Match IE11
    @media all and (-ms-high-contrast: none) {
      .search-box input {
        height: 2rem;
      }
    }

    @media (max-width: $MQNarrow) and (min-width: $MQMobile) {
      .search-box {
        .suggestions {
          left: 0;
        }
      }
    }

    @media (max-width: $MQMobile) {
      .search-box {
        margin-right: 0;

        input {
          left: 0;
        }

        .suggestions {
          right: 0;
        }
      }
    }

    @media (max-width: $MQMobileNarrow) {
      .search-box {
        .suggestions {
          width: calc(100vw - 4rem);
        }

        input:focus {
          width: 15rem;
        }
      }
    }
  }
}
</style>